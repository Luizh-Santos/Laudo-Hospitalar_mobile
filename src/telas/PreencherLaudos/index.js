import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { routes } from '../../routes.js';

import { styles } from '../../styles/index.js';

export default function PreencherLaudos({ nav }) {
    const cidInputRef = useRef(null);
    const codeInputRef = useRef(null);
    const [tab, setTab] = useState('quadro');
    const [clinica, setClinica] = useState('');
    const [caraterInternacao, setCaraterInternacao] = useState('');
    const [clinicaAberta, setClinicaAberta] = useState(false);
    const [caraterAberto, setCaraterAberto] = useState(false);

    const clinicas = ['Medica', 'Cirurgica', 'Obstetricia', 'Pediatrica'];
    const carateresInternacao = ['Eletiva', 'Urgencia/Emergencia'];

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
                    <Text style={styles.aihTabText}>Quadro Clínico</Text>
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
                    <Text style={styles.aihLabel}>
                        Principais sinais e sintomas clínicos <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput autoCorrect={false}
                        autoCapitalize="none"
                        multiline style={styles.aihTextarea} />

                    <Text style={styles.aihLabel}>
                        Condições que justificam a internação <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput autoCorrect={false}
                        autoCapitalize="none"
                        multiline style={styles.aihTextarea} />

                    <Text style={styles.aihLabel}>
                        Principais resultados de provas diagnósticas <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput autoCorrect={false}
                        autoCapitalize="none"
                        multiline style={styles.aihTextarea} />

                    <Text style={styles.aihLabel}>
                        Recursos necessários ao atendimento do paciente <Text style={styles.required}>*</Text>
                    </Text>
                    <TextInput autoCorrect={false}
                        autoCapitalize="none"
                        multiline style={styles.aihTextarea} />
                </View>
            ) : (
                <View style={styles.aihContent}>
                    <Text style={styles.aihLabel}>
                        Clínica <Text style={styles.required}>*</Text>
                    </Text>

                    <TouchableOpacity
                        style={styles.aihSelect}
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
                                })
                            )}
                        </View>
                    ) : null}

                    <Text style={styles.aihLabel}>
                        Caráter da Internação <Text style={styles.required}>*</Text>
                    </Text>

                    <TouchableOpacity
                        style={styles.aihSelect}
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
                                })
                            )}
                        </View>
                    ) : null}

                    <Text style={styles.aihLabel}>
                        CID Primário <Text style={styles.required}>*</Text>
                    </Text>

                    <View
                        style={styles.aihSmallSearchRow}
                        onTouchStart={() => cidInputRef.current?.focus()}
                    >
                        <TextInput autoCorrect={false}
                            autoCapitalize="none"
                            ref={cidInputRef}
                            returnKeyType="search"
                            showSoftInputOnFocus
                            style={styles.aihSmallInput} />
                        <Feather name="search" size={26} color="#222" />
                    </View>

                    <Text style={styles.aihLabel}>Código</Text>

                    <View
                        style={styles.aihCodeRow}
                        onTouchStart={() => codeInputRef.current?.focus()}
                    >
                        <TextInput autoCorrect={false}
                            autoCapitalize="none"
                            ref={codeInputRef}
                            returnKeyType="search"
                            showSoftInputOnFocus
                            style={styles.aihCodeInput} />
                        <Feather name="search" size={24} color="#222" />
                    </View>

                    <Text style={styles.aihLabel}>Descrição do Procedimento</Text>
                    <TextInput autoCorrect={false}
                        autoCapitalize="none"
                        style={styles.aihFullInput} />

                    <View style={styles.aihButtonRow}>
                        <TouchableOpacity style={styles.aihFavoriteButton}
                            onPress={() => nav.go(routes.adicionarFavoritos)}
                        >
                            <Text style={styles.aihFavoriteButtonText}>FAVORITAR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.aihFinishButton}
                            onPress={() => nav.reset(routes.medicoLaudos)}
                        >
                            <Text style={styles.aihFinishButtonText}>CONCLUIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
