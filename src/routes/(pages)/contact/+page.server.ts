//version w/o the main()
import { SECRET_API_KEY } from '$env/static/private'
import { SECRET_API_USER } from '$env/static/private'
import { SECRET_API_HOST } from '$env/static/private'
import { SECRET_API_RECEIVER } from '$env/static/private';
//console.log(SECRET_API_KEY)

import nodemailer from "nodemailer";
//import { fail } from "@sveltejs/kit";
import { z } from "zod";
import { message, superValidate } from "sveltekit-superforms/server";



const schema = z.object({
    name: z.string().default(""),
    email: z.string().email(),
    body: z.string().default(""),
});

// ' load '  action
export const load = async () => {

    //console.log(SECRET_API_KEY);
    //console.log(SECRET_API_USER);
    //console.log(SECRET_API_HOST);
    //console.log(SECRET_API_RECEIVER);



    // Server API:
    const form = await superValidate(schema);



    // Always return { form } in load and form actions.
    return { form };

};

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, schema);

        // this below console.log gets ALL form data, retain this
        //console.log('POST', form);

        console.log(form.data.email);

        if (!form.valid) {
            // Will return fail(400, { form }) since form isn't valid
            return message(form, 'Invalid form');
        }

        if (form.data.email.includes('spam')) {
            // Will also return fail, since status is >= 400
            // form.valid will also be set to false.
            return message(form, 'No spam please', {
                status: 403
            });
        }


        // if pass then run form action below
        //pretty sure below is with ssl not tls 
        const transporter = nodemailer.createTransport({
            host: SECRET_API_HOST,
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from smtp settings of mail>
                user: SECRET_API_USER,
                pass: SECRET_API_KEY,
            },
            // I added below more info here: https://nodemailer.com/smtp/
            tls: {
                rejectUnauthorized: false,
            },
        });

        const info = await transporter.sendMail({
            from: '"From GMF WebSite" <pam@germanmagicfarm.com>',

            // sender address
            to: SECRET_API_RECEIVER, // list of receivers
            subject: "Question For Pam 🐴", // Subject line
            text: `<${form.data.email}>`, // plain text body
            html: `<b>${form.data.name}</b> <p>${form.data.email}</p><p><b>PAM:  Click or copy Link to reply!</b></p><p>${form.data.body}</p>`,
            //email: `<${form.data.email}>`
        });

        //console.log(info.email);
        console.log("Message sent: %s", info.messageId);

        // Just returns { form } with the message (and status code 200).
        return message(form, 'Thank you for your submission! ');

    }

};
