import React from 'react'
import {
    SafeAreaView, ScrollView,
    TextInput, View, Modal, Text, DatePicker,
    StyleSheet, Pressable,
} from 'react-native'

const Formulario = (modalVisible, setModalVisible) => {

    const CerrarModal = () => {

    }
    return (
        <Modal>
            <SafeAreaView style={style.contenido}>

                <ScrollView>

                    <View>
                        <Text style={style.label}>Productos</Text>

                        <TextInput backgroundColor="gray" placeholder='Ingrese los productos'>

                        </TextInput>
                    </View>

                    <View>
                        <Text style={style.label}>Descuentos</Text>
                        <TextInput backgroundColor="gray" placeholder='Ingrese los descuentos'>

                        </TextInput>
                    </View>

                    <View>
                        <Text style={style.label}>E-mail</Text>
                        <TextInput backgroundColor="gray" placeholder='Ingrese su correo electrónico'>

                        </TextInput>
                    </View>

                    {/* <View>
            <Text style={style.label}>Fecha de alta</Text>
            <View style={style.fechaContenedor}>
                <DatePicker 
                    date={fecha}
                    locale='es'
                />
            </View>
          </View> */}

                    <View>
                        <Text style={style.label}>Sintomas</Text>
                        <TextInput backgroundColor="gray" placeholder='Ingrese sus sintomas'>

                        </TextInput>
                    </View>

                    <View>
                        <Pressable style={style.btnGuardar}
                            onPress={() => { CerrarModal }}
                        >
                            <Text color="black">Guardar</Text>
                        </Pressable>
                        <Pressable>
                            <Text color="black">Editar</Text>
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
        color: 'black'
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
        backgroundColor: 'purple',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: 'auto',
        color: 'black'
    },
    btnTextoGuardar: {},
});
export default Formulario;

//rafce
//ffc crear una funcion vacia