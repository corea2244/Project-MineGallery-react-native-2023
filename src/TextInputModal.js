import { Modal, Pressable, SafeAreaView, TextInput } from "react-native";

export default ({
  modalVisible,
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
        <SafeAreaView
          style={{ flex: 1, width: "100%", position: "absolute", bottom: 0 }}
        >
          <TextInput
            placeholder="앨범명을 입력해주세요"
            style={{
              width: "100%",
              padding: 10,
              borderWidth: 0.5,
              borderColor: "lightgrey",
            }}
            value={albumTitle}
            onChangeText={setAlbumTitle}
            onSubmitEditing={onSubmitEditing}
            autoFocus={true}
          />
        </SafeAreaView>
      </Pressable>
    </Modal>
  );
};
