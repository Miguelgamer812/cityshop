import React, { useState } from 'react';

import {
    SafeAreaView, ScrollView,
    TextInput, View, Modal, Text,
    StyleSheet, Pressable, Button
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const Formulario = (modalVisible, setModalVisible) => {

    const CerrarModal = () => {
        const [modalVisible, setModalVisible] = useState(false)

        const cerrarModal = () => {
            setModalVisible(false)
            console.log('Botón presionado');
        }
    }

    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false); // Estado para controlar la visibilidad del DateTimePicker

    const handleShowPicker = () => {
        setShowPicker(true); // Cuando se toca el botón, muestra el DateTimePicker
    };

    const handleDateChange = (event, selectedDate) => {
        setShowPicker(false); // Oculta el DateTimePicker después de seleccionar una fecha
        if (event.type === 'set') {
            setDate(selectedDate);
        }
    };

    return (
        <Modal>
            <SafeAreaView style={style.contenido}>

                <ScrollView>

                    <View>
                        <Text style={style.label}>Producto</Text>

                        <TextInput backgroundColor="gray" placeholder='Ingrese los productos'>

                        </TextInput>
                    </View>

                    <View>
                        <Text style={style.label}>Descripción del producto</Text>
                        <TextInput backgroundColor="gray" placeholder='Ingrese los descuentos'>

                        </TextInput>
                    </View>

                    <View>
                        <Text style={style.label}>Descripción larga de producto</Text>
                        <TextInput backgroundColor="gray" placeholder='Ingrese su correo electrónico'>

                        </TextInput>
                    </View>

                    <View>

                        <Text>Elija la fecha</Text>
                        <Button title="Seleccionar Fecha" onPress={handleShowPicker} />
                        {showPicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </View>

                    <View>
                        <Text style={style.label}>Precio de producto</Text>
                        <TextInput backgroundColor="gray" placeholder='Ingrese sus sintomas'>

                        </TextInput>
                    </View>

                    <View>
                        <Pressable style={style.btnGuardar}
                            onPress={() => { CerrarModal }}
                        >
                            <Text>Guardar</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    );
}

const style = StyleSheet.create({
    contenido: {
        backgroundColor: 'black',
        flex: 1,
    },
    btnTextoNuevaCita: {
        Color: 'black'
    },
    titulo: {},
    tituloBold: {},
    campo: {},
    fechaContenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {},
    inputSintomas: {
        fontWeight: '100'
    },

    btnGuardar: {
        textDecorationColor: '#FFF',
        color: '#FFF',
        backgroundColor: 'purple',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 'auto'
    },

    btnTextoGuardar: {},
});
//rafce
//ffc crear una funcion vacia
export default Formulario;