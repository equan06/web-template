import { json } from "express";
import { getGoogleOAuthTokens } from "../../../../utils/oauthGoogle";
export default async function handler(req, res) {
    try {
        // get code from queryString
    
        // get id and access token using the code
        const code = req.query.code;
        console.log(code);
        const tokens = await getGoogleOAuthTokens(code);
        if (tokens === undefined) {
            return res.status(400);
        }
        const {id_token, access_token} = tokens;
        // console.log(id_token, access_token);
        // return res.status(200).json({ code: code, id_token: id_token, access_token: access_token });
        return res.status(200).json({code: code, tokens: JSON.stringify(tokens)});
    }
    catch (error) {
        console.log(error);
        // redirect to an error page
    }
}
