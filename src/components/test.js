function CustomerList() {
  const [text, setText] = useState('')
  const [names, setNames] = useState([])
  const handleClick = () => {
    if (!text) {
      return false
    }
    let a = [...names]
    a.push(text)
    setNames(a)
    setText('')
  } 
  return (
      <>
          <SafeAreaView style={{flex: 1, marginBottom: 56}}>
              <FlatList
                  testID="customer-list"
                  data = {names}
                  renderItem={({item, index}) => (
                         <View style={[styles.card, styles.item, Styles.slide_up_fade_in]}
                            testID={`list-item${index}`}>
                          <Text style={styles.title}>{item}</Text>
                         </View> 
                      )}
                  keyExtractor={item => item}
              />
          </SafeAreaView>
          <View style={[Styles.card, styles.inputBox]}>
              <View style={{flex: 2}}>
                  <TextInput
                      style={[Styles.input_large, styles.input]}
                      placeholder="Add Customer"
                      testID="app-input"
                      value={text}
                      onChangeText={value => setText(value)}
                  />
              </View>
              <Button style={[Styles.button_small]}
                      testID="submit-button"
                      onClick={handleClick}>
                  Add
              </Button>
          </View>
      </>
  )
}