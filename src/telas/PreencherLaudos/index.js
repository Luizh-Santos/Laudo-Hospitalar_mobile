import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { routes } from '../../routes.js';

import { styles } from './styles.js';

export default function PreencherLaudos({
    nav,
    laudoFavoritoEmPreenchimento,
    onSalvarLaudoFavorito,
}) {
    const cidInputRef = useRef(null);
    const codeInputRef = useRef(null);
    const dadosIniciais = laudoFavoritoEmPreenchimento?.dados || {};
    const [tab, setTab] = useState('quadro');
    const [sinaisSintomas, setSinaisSintomas] = useState(dadosIniciais.sinaisSintomas || '');
    const [condicoesInternacao, setCondicoesInternacao] = useState(dadosIniciais.condicoesInternacao || '');
    const [resultadosDiagnosticos, setResultadosDiagnosticos] = useState(dadosIniciais.resultadosDiagnosticos || '');
    const [recursosNecessarios, setRecursosNecessarios] = useState(dadosIniciais.recursosNecessarios || '');
    const [clinica, setClinica] = useState(dadosIniciais.clinica || '');
    const [caraterInternacao, setCaraterInternacao] = useState(dadosIniciais.caraterInternacao || '');
    const [cidPrimario, setCidPrimario] = useState(dadosIniciais.cidPrimario || '');
    const [codigoProcedimento, setCodigoProcedimento] = useState(dadosIniciais.codigoProcedimento || '');
    const [descricaoProcedimento, setDescricaoProcedimento] = useState(dadosIniciais.descricaoProcedimento || '');
    const [clinicaAberta, setClinicaAberta] = useState(false);
    const [caraterAberto, setCaraterAberto] = useState(false);
    const [erro, setErro] = useState('');
    const [camposInvalidos, setCamposInvalidos] = useState({});

    const clinicas = ['Medica', 'Cirurgica', 'Obstetricia', 'Pediatrica'];
    const carateresInternacao = ['Eletiva', 'Urgencia/Emergencia'];

    function limparErroCampo(campo) {
        if (!erro && !camposInvalidos[campo]) return;

        setErro('');
        setCamposInvalidos((camposAtuais) => ({
            ...camposAtuais,
            [campo]: false,
        }));
    }

    function finalizarLaudo() {
        const invalidos = {
            sinaisSintomas: !sinaisSintomas.trim(),
            condicoesInternacao: !condicoesInternacao.trim(),
            resultadosDiagnosticos: !resultadosDiagnosticos.trim(),
            recursosNecessarios: !recursosNecessarios.trim(),
            clinica: !clinica,
            caraterInternacao: !caraterInternacao,
            cidPrimario: !cidPrimario.trim(),
        };

        const temErroQuadro =
            invalidos.sinaisSintomas ||
            invalidos.condicoesInternacao ||
            invalidos.resultadosDiagnosticos ||
            invalidos.recursosNecessarios;
        const temErroProcedimento =
            invalidos.clinica ||
            invalidos.caraterInternacao ||
            invalidos.cidPrimario;

        if (temErroQuadro || temErroProcedimento) {
            setCamposInvalidos(invalidos);
            setErro('Preencha todos os campos obrigatorios marcados com *.');

            if (temErroQuadro) {
                setTab('quadro');
            }

            return;
        }

        setErro('');
        setCamposInvalidos({});

        if (laudoFavoritoEmPreenchimento) {
            onSalvarLaudoFavorito?.({
                sinaisSintomas,
                condicoesInternacao,
                resultadosDiagnosticos,
                recursosNecessarios,
                clinica,
                caraterInternacao,
                cidPrimario,
                codigoProcedimento,
                descricaoProcedimento,
            });
            nav.reset(routes.favoritosConfig);
            return;
        }

        nav.reset(routes.medicoLaudos);
    }

    function renderSelectOption(item, selected, onPress) {
        return (
            <TouchableOpacity
                key={item}
                style={[
                    styles.aihSelectOption,
                    selected && styles.aihSelectOptionSelected,
                ]}
                onPress={onPress}
            >
                <Text style={styles.aihSelectOptionText}>{item}</Text>
                {selected ? <Feather name="check" size={14} color="#213D4C" /> : null}
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.flex}>
            <View style={styles.aihHeader}>
                <TouchableOpacity onPress={() => nav.back()} style={styles.aihBack}>
                    <Feather name="chevron-left" size={28} color="#FFFFFF" />
                </TouchableOpacity>

                <Feather name="plus-square" size={42} color="#FFFFFF" />

                <TouchableOpacity style={styles.aihStar}>
                    <Feather name="star" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <View style={styles.aihTabs}>
                <TouchableOpacity
                    style={styles.aihTab}
                    onPress={() => setTab('quadro')}
                >
                    <Text style={styles.aihTabText}>Quadro Clinico</Text>
                    {tab === 'quadro' && <View style={styles.aihTabLine} />}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.aihTab}
                    onPress={() => setTab('procedimento')}
                >
                    <Text style={styles.aihTabText}>Procedimento</Text>
                    {tab === 'procedimento' && <View style={styles.aihTabLine} />}
                </TouchableOpacity>
            </View>

            {tab === 'quadro' ? (
                <View style={styles.aihContent}>
                    {erro ? <Text style={styles.aihError}>{erro}</Text> : null}

                    <Text style={styles.aihLabel}>
                        Principais sinais e sintomas clinicos <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        multiline
                        value={sinaisSintomas}
                        onChangeText={(texto) => {
                            setSinaisSintomas(texto);
                            limparErroCampo('sinaisSintomas');
                        }}
                        style={[
                            styles.aihTextarea,
                            camposInvalidos.sinaisSintomas && styles.aihInputError,
                        ]}
                    />

                    <Text style={styles.aihLabel}>
                        Condicoes que justificam a internacao <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        multiline
                        value={condicoesInternacao}
                        onChangeText={(texto) => {
                            setCondicoesInternacao(texto);
                            limparErroCampo('condicoesInternacao');
                        }}
                        style={[
                            styles.aihTextarea,
                            camposInvalidos.condicoesInternacao && styles.aihInputError,
                        ]}
                    />

                    <Text style={styles.aihLabel}>
                        Principais resultados de provas diagnosticas <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        multiline
                        value={resultadosDiagnosticos}
                        onChangeText={(texto) => {
                            setResultadosDiagnosticos(texto);
                            limparErroCampo('resultadosDiagnosticos');
                        }}
                        style={[
                            styles.aihTextarea,
                            camposInvalidos.resultadosDiagnosticos && styles.aihInputError,
                        ]}
                    />

                    <Text style={styles.aihLabel}>
                        Recursos necessarios ao atendimento do paciente <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        multiline
                        value={recursosNecessarios}
                        onChangeText={(texto) => {
                            setRecursosNecessarios(texto);
                            limparErroCampo('recursosNecessarios');
                        }}
                        style={[
                            styles.aihTextarea,
                            camposInvalidos.recursosNecessarios && styles.aihInputError,
                        ]}
                    />
                </View>
            ) : (
                <View style={styles.aihContent}>
                    {erro ? <Text style={styles.aihError}>{erro}</Text> : null}

                    <Text style={styles.aihLabel}>
                        Clinica <Text style={styles.required}>*</Text>
                    </Text>

                    <TouchableOpacity
                        style={[
                            styles.aihSelect,
                            camposInvalidos.clinica && styles.aihInputError,
                        ]}
                        onPress={() => {
                            setClinicaAberta(!clinicaAberta);
                            setCaraterAberto(false);
                        }}
                    >
                        <Text style={styles.aihSelectText}>{clinica || 'Escolha'}</Text>
                        <Feather name="chevron-down" size={20} color="#222" />
                    </TouchableOpacity>

                    {clinicaAberta ? (
                        <View style={styles.aihSelectOptions}>
                            {clinicas.map((item) =>
                                renderSelectOption(item, clinica === item, () => {
                                    setClinica(item);
                                    setClinicaAberta(false);
                                    limparErroCampo('clinica');
                                })
                            )}
                        </View>
                    ) : null}

                    <Text style={styles.aihLabel}>
                        Carater da Internacao <Text style={styles.required}>*</Text>
                    </Text>

                    <TouchableOpacity
                        style={[
                            styles.aihSelect,
                            camposInvalidos.caraterInternacao && styles.aihInputError,
                        ]}
                        onPress={() => {
                            setCaraterAberto(!caraterAberto);
                            setClinicaAberta(false);
                        }}
                    >
                        <Text style={styles.aihSelectText}>{caraterInternacao || 'Escolha'}</Text>
                        <Feather name="chevron-down" size={20} color="#222" />
                    </TouchableOpacity>

                    {caraterAberto ? (
                        <View style={styles.aihSelectOptions}>
                            {carateresInternacao.map((item) =>
                                renderSelectOption(item, caraterInternacao === item, () => {
                                    setCaraterInternacao(item);
                                    setCaraterAberto(false);
                                    limparErroCampo('caraterInternacao');
                                })
                            )}
                        </View>
                    ) : null}

                    <Text style={styles.aihLabel}>
                        CID Primario <Text style={styles.required}>*</Text>
                    </Text>

                    <View
                        style={styles.aihSmallSearchRow}
                        onTouchStart={() => cidInputRef.current?.focus()}
                    >
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize="none"
                            ref={cidInputRef}
                            returnKeyType="search"
                            showSoftInputOnFocus
                            value={cidPrimario}
                            onChangeText={(texto) => {
                                setCidPrimario(texto);
                                limparErroCampo('cidPrimario');
                            }}
                            style={[
                                styles.aihSmallInput,
                                camposInvalidos.cidPrimario && styles.aihInputError,
                            ]}
                        />
                        <Feather name="search" size={26} color="#222" />
                    </View>

                    <Text style={styles.aihLabel}>Codigo do Procedimento</Text>

                    <View
                        style={styles.aihCodeRow}
                        onTouchStart={() => codeInputRef.current?.focus()}
                    >
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize="none"
                            ref={codeInputRef}
                            returnKeyType="search"
                            showSoftInputOnFocus
                            value={codigoProcedimento}
                            onChangeText={setCodigoProcedimento}
                            style={styles.aihCodeInput}
                        />
                        <Feather name="search" size={24} color="#222" />
                    </View>

                    <Text style={styles.aihLabel}>Descricao do Procedimento</Text>
                    <TextInput
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={descricaoProcedimento}
                        onChangeText={setDescricaoProcedimento}
                        style={styles.aihFullInput}
                    />

                    <View style={styles.aihButtonRow}>
                        <TouchableOpacity
                            style={styles.aihFavoriteButton}
                            onPress={() => nav.go(routes.adicionarFavoritos)}
                        >
                            <Text style={styles.aihFavoriteButtonText}>FAVORITAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.aihFinishButton}
                            onPress={finalizarLaudo}
                        >
                            <Text style={styles.aihFinishButtonText}>PREENCHER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
