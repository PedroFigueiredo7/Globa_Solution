import { useState } from 'react';

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ cpf: '', senha: '' });
  const [cadastroData, setCadastroData] = useState({ cpf: '', email: '', nome: '', sobrenome: '', numeroCarteirinha: '', senha: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleCadastroChange = (e) => {
    const { name, value } = e.target;
    setCadastroData({ ...cadastroData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.cpf && loginData.senha) {
      console.log('Dados de Login:', loginData);
      // Adicione a lógica de redirecionamento para a próxima página após login
    } else {
      alert('Por favor, preencha CPF e senha.');
    }
  };

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    if (
      cadastroData.cpf &&
      cadastroData.email &&
      cadastroData.nome &&
      cadastroData.sobrenome &&
      cadastroData.numeroCarteirinha &&
      cadastroData.senha
    ) {
      console.log('Dados de Cadastro:', cadastroData);
      // Adicione a lógica de redirecionamento para a próxima página após cadastro
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
        <input type="text" name="cpf" value={loginData.cpf} onChange={handleLoginChange} placeholder="CPF" />
        <input type="password" name="senha" value={loginData.senha} onChange={handleLoginChange} placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>

      <form onSubmit={handleCadastroSubmit}>
        <h2>Cadastro</h2>
        {/* Campos do formulário de cadastro */}
      </form>
    </div>
  );
}
