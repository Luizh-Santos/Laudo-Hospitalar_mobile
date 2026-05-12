import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { routes } from '../../routes.js';

import { styles } from '../../styles/index.js';

export default function PreencherLaudos({ nav }) {
    const [tab, setTab] = useState('quadro');

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

                    <TouchableOpacity style={styles.aihSelect}>
                        <Text style={styles.aihSelectText}>Escolha</Text>
                        <Feather name="chevron-right" size={20} color="#222" />
                    </TouchableOpacity>

                    <Text style={styles.aihLabel}>
                        Caráter da Internação <Text style={styles.required}>*</Text>
                    </Text>

                    <TouchableOpacity style={styles.aihSelect}>
                        <Text style={styles.aihSelectText}>Escolha</Text>
                        <Feather name="chevron-right" size={20} color="#222" />
                    </TouchableOpacity>

                    <Text style={styles.aihLabel}>
                        CID Primário <Text style={styles.required}>*</Text>
                    </Text>

                    <View style={styles.aihSmallSearchRow}>
                        <TextInput autoCorrect={false}
                            autoCapitalize="none"
                            style={styles.aihSmallInput} />
                        <Feather name="search" size={26} color="#222" />
                    </View>

                    <Text style={styles.aihLabel}>Código</Text>

                    <View style={styles.aihCodeRow}>
                        <TextInput autoCorrect={false}
                            autoCapitalize="none"
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