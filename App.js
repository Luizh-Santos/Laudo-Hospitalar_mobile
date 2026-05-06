import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './src/styles/index.js';
import { routes } from './src/routes.js';
import useSimpleNavigation from './src/navigation/useSimpleNavigation.js';

import Home from './src/telas/Home/index.js';
import Sobre from './src/telas/Sobre/index.js';
import Funcionalidades from './src/telas/Funcionalidades/index.js';
import Contato from './src/telas/Contato/index.js';
import Login from './src/telas/Login/index.js';
import Esqueci from './src/telas/Esqueci/index.js';

import Laudos from './src/telas/Laudos/index.js';
import Notificacoes from './src/telas/Notificacoes/index.js';
import MenuPaciente from './src/telas/MenuPaciente/index.js';
import PreencherLaudos from './src/telas/PreencherLaudos/index.js';
import Favoritos from './src/telas/Favoritos/index.js';

import BuscarCid from './src/telas/BuscarCid/index.js';
import BuscarProcedimentos from './src/telas/BuscarProcedimentos/index.js';

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

export default function App() {
  const nav = useSimpleNavigation();
  const screen = nav.current;

  const screens = useMemo(
    () => ({
      [routes.home]: Home,
      [routes.sobre]: Sobre,
      [routes.funcionalidades]: Funcionalidades,
      [routes.contato]: Contato,
      [routes.login]: Login,

      [routes.esqueci1]: (props) => <Esqueci {...props} step={1} />,
      [routes.esqueci2]: (props) => <Esqueci {...props} step={2} />,
      [routes.esqueci3]: (props) => <Esqueci {...props} step={3} />,
      [routes.esqueci4]: (props) => <Esqueci {...props} step={4} />,
      [routes.esqueci5]: (props) => <Esqueci {...props} step={5} />,

      [routes.medicoLaudos]: Laudos,
      [routes.notificacoes]: Notificacoes,
      [routes.menuPaciente]: MenuPaciente,
      [routes.preencherLaudos]: PreencherLaudos,
      [routes.favoritos]: Favoritos,
      [routes.buscarCid]: BuscarCid,
      [routes.buscarProcedimentos]: BuscarProcedimentos,

      [routes.configuracoes]: Configuracoes,
      [routes.perfil]: Perfil,
      [routes.seguranca]: Seguranca,
      [routes.suporte]: Suporte,
      [routes.termos]: Termos,

      [routes.alterarEmail]: AlterarEmail,
      [routes.alterarSenha]: AlterarSenha,
      [routes.faleConosco]: FaleConosco,
      [routes.horarios]: Horarios,
      [routes.adicionarFavoritos]: AdicionarFavoritos,
    }),
    []
  );

  const Screen = screens[screen] || Login;

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <Screen nav={nav} />
    </SafeAreaView>
  );
}