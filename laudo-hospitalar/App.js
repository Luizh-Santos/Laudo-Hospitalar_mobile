import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './src/styles';
import { routes } from './src/routes';
import useSimpleNavigation from './src/navigation/useSimpleNavigation';

import Home from './src/telas/Home';
import Sobre from './src/telas/Sobre';
import Funcionalidades from './src/telas/Funcionalidades';
import Contato from './src/telas/Contato';
import Login from './src/telas/Login';
import Esqueci from './src/telas/Esqueci';
import Laudos from './src/telas/Laudos';
import Notificacoes from './src/telas/Notificacoes';
import MenuPaciente from './src/telas/MenuPaciente';
import PreencherLaudos from './src/telas/PreencherLaudos';
import Favoritos from './src/telas/Favoritos';
import BuscarCid from './src/telas/BuscarCid';
import BuscarProcedimentos from './src/telas/BuscarProcedimentos';
import Configuracoes from './src/telas/Configuracoes';
import Perfil from './src/telas/Perfil';
import Seguranca from './src/telas/Seguranca';
import Suporte from './src/telas/Suporte';
import Termos from './src/telas/Termos';
import AlterarEmail from './src/telas/AlterarEmail';
import AlterarSenha from './src/telas/AlterarSenha';
import FaleConosco from './src/telas/FaleConosco';
import Horarios from './src/telas/Horarios';
import AdicionarFavoritos from './src/telas/AdicionarFavoritos';

export default function App() {
  const nav = useSimpleNavigation();
  const screen = nav.current;

  const Screen = useMemo(() => ({
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
    [routes.alterarEmail]: AlterarEmail,
    [routes.alterarSenha]: AlterarSenha,
    [routes.suporte]: Suporte,
    [routes.faleConosco]: FaleConosco,
    [routes.horarios]: Horarios,
    [routes.termos]: Termos,
    [routes.adicionarFavoritos]: AdicionarFavoritos,
  }), [] )[screen] || Home;

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      <Screen nav={nav} />
    </SafeAreaView>
  );
}
