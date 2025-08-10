const nodemailer = require('nodemailer');

async function enviarContato(req, res) {
    const {
        nome,
        email,
        tema,
        mensagem,
        info
    } = req.body;

    // Verifica se as variáveis de ambiente estão definidas
    if (!process.env.EMAIL_SERVER || !process.env.EMAIL_SENHA) {
        console.error('Variáveis de ambiente para email não definidas.');
        return res.render('contato', {
            mensagemErro: 'Configuração de email inválida. Tente novamente mais tarde.'
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_SERVER,
                pass: process.env.EMAIL_SENHA
            }
        });

        const mailOptionsParaMim = {
            from: `"${nome}" <${process.env.EMAIL_SERVER}>`,
            replyTo: email,
            to: process.env.EMAIL_SERVER,
            subject: `Contato: ${tema}`,
            html: `
        <h3>Nova mensagem do formulário de contato</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${tema}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
        <p><strong>Deseja info?</strong> ${info ? 'Sim' : 'Não'}</p>
      `
        };

        await transporter.sendMail(mailOptionsParaMim);

        const mailOptionsParaUsuario = {
            from: `"Guardião dos Enigmas" <${process.env.EMAIL_SERVER}>`,
            to: email,
            subject: 'Recebemos sua mensagem',
            html: `
        <h2>Olá, ${nome}!</h2>
        <p>Recebemos sua mensagem com o assunto <strong>${tema}</strong> e vamos respondê-la em até 48 horas.</p>
        <p>Enquanto isso, continue explorando os enigmas no nosso site!</p>
        <br>
        <p>Atenciosamente,</p>
        <p><em>O Guardião dos Enigmas</em></p>
      `
        };

        await transporter.sendMail(mailOptionsParaUsuario);

        return res.render('contato', {
            mensagemSucesso: 'Sua mensagem foi enviada com sucesso!'
        });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return res.render('contato', {
            mensagemErro: 'Ocorreu um erro. Tente novamente mais tarde.'
        });
    }
}

module.exports = {
    enviarContato
};