import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:5001/challenge-f4f5a/us-central1/api" // The API (cloud function) URL
});

export default instance;
//get baseURL by upgrading to blaze and update it
//deploye --only functions   in functions
//
//firebase init
//select hosting
// public script:build
//yes
//y
//// npm run build && firebase deploy --only hosting    