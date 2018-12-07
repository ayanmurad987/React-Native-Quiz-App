import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions,FacesDetected ,ActivityIndicator} from 'expo';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    faceShow: true,
    tex: 'ayannv'
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  handleFacesDetected = ()=>{
this.setState({faceShow:false})
// this.setState({tex:'taha'})
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false  ) {
      return <Text>No access to camera</Text>;
    } else if(this.state.faceShow) {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}
              onFacesDetected={this.handleFacesDetected}          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.back
                      : Camera.Constants.Type.front,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {this.state.tex}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        
          <Text>
            aaaaaaaaa
           
          </Text>
        </View>
      )
    }
  }
}