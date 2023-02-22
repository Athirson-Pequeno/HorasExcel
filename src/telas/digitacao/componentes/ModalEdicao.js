import react, { useState, useContext } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { ModalVisivelContext } from "../../../contexts/ModalVisivelContext";
import FormularioEdicaoModal from "./FormularioEdicaoModal";

export default function ModalEdicao(){

    const { modalVisivel, paradaSelecionada } = useContext(ModalVisivelContext)
    return(
    <View>
        <Modal
        visible={modalVisivel}
        animationType={'fade'}
        transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              marginVertical: 60,
              width: '90%',
              height: '28%',
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 7,
              elevation: 10,
            }}>
            <View style={{alignItems: 'center', margin: 10}}>
            <FormularioEdicaoModal paradaSelecionada={paradaSelecionada}/>
            </View>
            </View>
        </View>
      </Modal>
    </View>
)
}