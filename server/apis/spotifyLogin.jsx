import { useState, useEffect, useContext } from "react";
// import { GlobalContext } from "../context/context";
import { useGlobalContext } from "../../context/context";
import LoginButton from "../../components/loginButton";

const client_id = "33fa1509ffad418ca7154c0a7b8af9c5";
const redirect_url = "http://localhost:5173";

    function generateRandomString(length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
        for (let i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
      }

    async function generateCodeChallenge(codeVerifier) {
        function base64encode(string) {
          return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
        }
      
        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
      
        return base64encode(digest);
      }

      function SpotifyLogin() {
        const [accessCode, setAccessCode] = useState("");
        const [profileName, setProfileName] = useState("");
        const [profileImage, setProfileImage] = useState("");
        const {setName} = useGlobalContext();

      function handleLogin() {
        const codeVerifier = generateRandomString(128);
        localStorage.setItem("codeVerifier", codeVerifier); // Store codeVerifier in localStorage
    
        generateCodeChallenge(codeVerifier)
        .then((codeChallenge) => {
          const state = generateRandomString(16);
          const scope = "user-read-private user-read-email";
    
          const args = new URLSearchParams({
            response_type: "code",
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_url,
            state: state,
            code_challenge_method: "S256",
            code_challenge: codeChallenge,
          });
    
          window.location = "https://accounts.spotify.com/authorize?" + args;
        });
      }

      async function getProfile() {
        const param = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessCode}`
          }
        }
        const ambilData = await fetch('https://api.spotify.com/v1/me', param);
        const result = await ambilData.json();
        setProfileName(result.display_name);
        if(result.images.length == 0){
          setProfileImage("https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg");
          }
        
        else{
          setProfileImage(result.images[0].url);
        }
        console.log(profileImage);
        setName(result.display_name);
      }
    
      useEffect(() => {
        // Check if there's an access token stored in local storage
        const storedAccessToken = sessionStorage.getItem("accessToken");
        if (storedAccessToken) {
          setAccessCode(storedAccessToken);
        }
      
        // Check for the authorization code in the URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
      
        if (code) {
          const codeVerifier = localStorage.getItem("codeVerifier");
      
          const body = new URLSearchParams({
            grant_type: "authorization_code",
            code: code,
            redirect_uri: redirect_url,
            client_id: client_id,
            code_verifier: codeVerifier,
          });
      
          fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("HTTP status " + response.status);
              }
              return response.json();
            })
            .then((data) => {
              setAccessCode(data.access_token);
              localStorage.removeItem("codeVerifier");
              sessionStorage.setItem("accessToken", data.access_token); // Store the access token
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      }, []); // Empty dependency array ensures this runs only once when the component mounts
      

      useEffect(() => {
        console.log(profileImage);
        const session_token = sessionStorage.getItem("access_token");
        if (accessCode) {
            getProfile();
        }
      }, [accessCode]);
    
      return (
        <div>
        {accessCode ? 
        (
          <div className="bg-white rounded-full text-emerald-500 px-4 py-2 text-center">
            <p className="flex items-center">
              <span className="inline-block">
                <img src={profileImage} alt="" className="rounded-full" width={30} height={30} />
              </span>
              <span className="ml-2 font-medium">{profileName}</span>
            </p>
          </div>
        ) : (
          <LoginButton handleLogin={handleLogin} />
        )}
      </div>
      );
    }
    
export default SpotifyLogin;
