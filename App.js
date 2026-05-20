import React, { useMemo, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './src/styles/index.js';
import { routes } from './src/routes.js';
import useSimpleNavigation from './src/navigation/useSimpleNavigation.js';

import Login from './src/telas/Login/index.js';
import Esqueci from './src/telas/Esqueci/index.js';

import Laudos from './src/telas/Laudos/index.js';
import Conversas from './src/telas/Conversas/index.js';
import Notificacoes from './src/telas/Notificacoes/index.js';
import MenuPaciente from './src/telas/MenuPaciente/index.js';
import PreencherLaudos from './src/telas/PreencherLaudos/index.js';

import Configuracoes from './src/telas/Configuracoes/index.js';
import Perfil from './src/telas/Perfil/index.js';
import Seguranca from './src/telas/Seguranca/index.js';
import Suporte from './src/telas/Suporte/index.js';
import Termos from './src/telas/Termos/index.js';

import AlterarEmail from './src/telas/AlterarEmail/index.js';
import AlterarSenha from './src/telas/AlterarSenha/index.js';
import FaleConosco from './src/telas/FaleConosco/index.js';
import Horarios from './src/telas/Horarios/index.js';
import AdicionarFavoritos from './src/telas/AdicionarFavoritos/index.js';

const laudosFavoritosIniciais = [
  { id: 1, nome: 'PNEUMONIA' },
  { id: 2, nome: 'PNEUMONIA' },
  { id: 3, nome: 'PNEUMONIA' },
  { id: 4, nome: 'PNEUMONIA' },
];

export default function App() {
  const nav = useSimpleNavigation();
  const screen = nav.current;
  const [laudosFavoritos, setLaudosFavoritos] = useState(laudosFavoritosIniciais);
  const [laudoFavoritoEmPreenchimento, setLaudoFavoritoEmPreenchimento] = useState(null);

  function iniciarCadastroFavorito(nome) {
    setLaudoFavoritoEmPreenchimento({ id: Date.now(), nome, modo: 'criar' });
  }

  function salvarLaudoFavorito(dadosLaudo) {
    if (!laudoFavoritoEmPreenchimento) return;

    if (laudoFavoritoEmPreenchimento.modo === 'editar') {
      setLaudosFavoritos((laudosAtuais) =>
        laudosAtuais.map((laudo) =>
          laudo.id === laudoFavoritoEmPreenchimento.id
            ? {
                ...laudo,
                nome: laudoFavoritoEmPreenchimento.nome,
                dados: dadosLaudo,
              }
            : laudo
        )
      );
    } else {
      setLaudosFavoritos((laudosAtuais) => [
        ...laudosAtuais,
        {
          ...laudoFavoritoEmPreenchimento,
          dados: dadosLaudo,
        },
      ]);
    }

    setLaudoFavoritoEmPreenchimento(null);
  }

  function abrirEdicaoLaudoFavorito(laudo) {
    setLaudoFavoritoEmPreenchimento({ ...laudo, modo: 'editar' });
  }

  function excluirLaudoFavorito(id) {
    setLaudosFavoritos((laudosAtuais) =>
      laudosAtuais.filter((laudo) => laudo.id !== id)
    );
  }

  function resetarDemoFavoritos() {
    setLaudosFavoritos(laudosFavoritosIniciais);
    setLaudoFavoritoEmPreenchimento(null);
  }

  const screens = useMemo(
    () => ({
      [routes.login]: Login,

      [routes.esqueci1]: (props) => <Esqueci {...props} step={1} />,
      [routes.esqueci2]: (props) => <Esqueci {...props} step={2} />,
      [routes.esqueci3]: (props) => <Esqueci {...props} step={3} />,
      [routes.esqueci4]: (props) => <Esqueci {...props} step={4} />,
      [routes.esqueci5]: (props) => <Esqueci {...props} step={5} />,

      [routes.medicoLaudos]: Laudos,
      [routes.conversas]: Conversas,
      [routes.notificacoes]: Notificacoes,
      [routes.menuPaciente]: MenuPaciente,
      [routes.preencherLaudos]: (props) => (
        <PreencherLaudos
          {...props}
          laudoFavoritoEmPreenchimento={laudoFavoritoEmPreenchimento}
          onSalvarLaudoFavorito={salvarLaudoFavorito}
        />
      ),

      [routes.configuracoes]: Configuracoes,
      [routes.perfil]: Perfil,
      [routes.seguranca]: Seguranca,
      [routes.suporte]: Suporte,
      [routes.termos]: Termos,
      [routes.adicionarFavoritos]: (props) => (
        <AdicionarFavoritos
          {...props}
          laudos={laudosFavoritos}
          onIniciarCadastroFavorito={iniciarCadastroFavorito}
          onEditarLaudoFavorito={abrirEdicaoLaudoFavorito}
          onExcluirLaudoFavorito={excluirLaudoFavorito}
          onSairFavoritos={resetarDemoFavoritos}
        />
      ),
      [routes.favoritosConfig]: (props) => (
        <AdicionarFavoritos
          {...props}
          laudos={laudosFavoritos}
          onIniciarCadastroFavorito={iniciarCadastroFavorito}
          onEditarLaudoFavorito={abrirEdicaoLaudoFavorito}
          onExcluirLaudoFavorito={excluirLaudoFavorito}
          onSairFavoritos={resetarDemoFavoritos}
        />
      ),
      

      [routes.alterarEmail]: AlterarEmail,
      [routes.alterarSenha]: AlterarSenha,
      [routes.faleConosco]: FaleConosco,
      [routes.horarios]: Horarios,
      
    }),
    [laudoFavoritoEmPreenchimento, laudosFavoritos]
  );

  const Screen = screens[screen] || Login;

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <View style={styles.screenShell}>
        <Screen nav={nav} />
      </View>
    </SafeAreaView>
  );
}
