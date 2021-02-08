import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native'
import Level from '../components/Level'

export default props => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Selecione o Nível</Text>
                <Level
                    buttonStyle={styles.button}
                    stylesLevel={styles.bgEasy}
                    onLevelSelected={() => props.onLevelSelected(0.1)}
                    buttonLabel={styles.buttonLabel}
                    label='Fácil'
                />
                {/* <TouchableOpacity 
                    style={[styles.button, styles.bgEasy]}
                    onPress={() => props.onLevelSelected(0.1)}>
                    <Text style={styles.buttonLabel}>Fácil</Text>
                </TouchableOpacity> */}
                <Level
                    buttonStyle={styles.button}
                    stylesLevel={styles.bgNormal}
                    onLevelSelected={() => props.onLevelSelected(0.2)}
                    buttonLabel={styles.buttonLabel}
                    label='Intermediário'
                />
                {/* <TouchableOpacity 
                    style={[styles.button, styles.bgNormal]}
                    onPress={() => props.onLevelSelected(0.2)}>
                    <Text style={styles.buttonLabel}>Intermediário</Text>
                </TouchableOpacity> */}
                <Level
                    buttonStyle={styles.button}
                    stylesLevel={styles.bgHard}
                    onLevelSelected={() => props.onLevelSelected(0.3)}
                    buttonLabel={styles.buttonLabel}
                    label='Difícil'
                />
                {/* <TouchableOpacity 
                    style={[styles.button, styles.bgHard]}
                    onPress={() => props.onLevelSelected(0.3)}>
                    <Text style={styles.buttonLabel}>Difícil</Text>
                </TouchableOpacity> */}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49B65D'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})