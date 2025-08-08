const nodemailer = require('nodemailer');

async function enviarContato(req, res) {
    const { name, email, subject, message, newsletter } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'emailADM@gmail.com',
                pass: 'senha'
            }
        });

        const mailOptionsParaMim = {
            from: `"${name}" <${email}>`,
            to: 'emailADM@gmail.com',
            subject: `Contato: ${subject}`,
            html: `
                <h3>Nova mensagem do formulário de contato</h3>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
                <p><strong>Deseja newsletter?</strong> ${newsletter ? 'Sim' : 'Não'}</p>
            `
        };

        await transporter.sendMail(mailOptionsParaMim);

        const mailOptionsParaUsuario = {
            from: '"Guardião dos Enigmas" <emailADM@gmail.com>',
            to: email,
            subject: 'Recebemos sua mensagem',
            html: `
                <h2>Olá, ${name}!</h2>
                <p>Recebemos sua mensagem com o assunto <strong>${subject}</strong> e vamos respondê-la em até 48 horas.</p>
                <p>Enquanto isso, continue explorando os enigmas no nosso site!</p>
                <br>
                <p>Atenciosamente,</p>
                <p><em>O Guardião dos Enigmas</em></p>
            `
        };

        await transporter.sendMail(mailOptionsParaUsuario);

        res.render('contato', { successMessage: 'Sua mensagem foi enviada com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.render('contato', { errorMessage: 'Ocorreu um erro. Tente novamente mais tarde.' });
    }
}

module.exports = { enviarContato };
