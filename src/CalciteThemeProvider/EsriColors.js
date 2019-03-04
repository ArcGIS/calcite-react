// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

const EsriColors = {
  // ┌─────────────────────────────────┐
  // │ Esri Color Palette - DON'T EDIT │
  // └─────────────────────────────────┘
  Brand_Blue_100: '#b9e0f7', //  previously blue 14
  Brand_Blue_150: '#00b9f2', // previously blue 13
  Brand_Blue_200: '#007ac2', // "Esri Blue", previously blue 12
  Brand_Blue_250: '#004575', // previously blue 11

  Brand_Yellow_100: '#ffec4f', // previously yellow 22

  Brand_Orange_100: '#f89927', // previously orange 21
  Brand_Orange_150: '#f36f20', // previously orange 20
  Brand_Orange_200: '#da4d1e', // previously orange 19

  Brand_Red_100: '#de2900', // new color :)

  Brand_Green_100: '#d1e391', // previously green 18
  Brand_Green_150: '#aad04b', // previously green 17
  Brand_Green_200: '#35ac46', // "Esri Green", previously green 16
  Brand_Green_250: '#2a7433', // previously green 15

  Brand_Purple_100: '#dfcce3', // previously purple 26
  Brand_Purple_150: '#b279b4', // previously purple 25
  Brand_Purple_200: '#8f499c', // previously purple 24
  Brand_Purple_250: '#6b1978', // previously purple 23

  Brand_Brown_100: '#ecdcb9', // previously brown 10
  Brand_Brown_150: '#be9969', // previously brown 9
  Brand_Brown_200: '#7b4f1c', // previously brown 8
  Brand_Brown_250: '#523b20', // previously brown 7

  Brand_Gray_100: '#b4b4b4', // previously gray 6, 35%
  Brand_Gray_150: '#969696', // previously gray 5, 50%
  Brand_Gray_200: '#6e6e6e', // previously gray 4, 75%
  Brand_Gray_250: '#464646', // previously gray 3, 88%

  Calcite_Blue_100: '#d2e9f9',
  Calcite_Blue_150: '#bcdaed',
  Calcite_Blue_200: '#6cb4e2',
  Calcite_Blue_250: '#56a5d8',
  Calcite_Blue_a100: '#49b0f2',
  Calcite_Blue_a150: '#419ed9',
  Calcite_Blue_a200: '#3b8fc4',
  Calcite_Blue_a250: '#196fa6',
  Calcite_Yellow_100: '#f3edc7', // previously Esri_Yellow1
  Calcite_Yellow_150: '#efe397', // previously Esri_Yellow2
  Calcite_Yellow_200: '#e4d154', // previously Esri_Yellow3
  Calcite_Yellow_250: '#d8c34b', // previously Esri_Yellow4
  Calcite_Yellow_a100: '#f2d530',
  Calcite_Yellow_a150: '#d9bf2b',
  Calcite_Yellow_a200: '#bda726',
  Calcite_Yellow_a250: '#a68d00',
  Calcite_Orange_100: '#fbe1c2', // previously Esri_Orange1
  Calcite_Orange_150: '#f6ca92', // previously Esri_Orange2
  Calcite_Orange_200: '#eda959', // previously Esri_Orange3
  Calcite_Orange_250: '#e79c47', // previously Esri_Orange4
  Calcite_Orange_a100: '#ff9f33',
  Calcite_Orange_a150: '#e8912e',
  Calcite_Orange_a200: '#d17e21',
  Calcite_Orange_a250: '#ad6511',
  Calcite_Green_100: '#ddeedb', // replaces Esri_Green1. Use in Success Messages with Calcite_Green_450
  Calcite_Green_150: '#9bc19c', // previously Esri_Green2
  Calcite_Green_200: '#67a966', // previously Esri_Green3
  Calcite_Green_250: '#5a9359', // previously Esri_Green4
  Calcite_Green_a100: '#50ad4e',
  Calcite_Green_a150: '#449443',
  Calcite_Green_a200: '#338033',
  Calcite_Green_a250: '#275e26', // replaces Esri_Green5. Use in Success Messages with Calcite_Green_100
  Calcite_Red_100: '#f3ded7', // previously Esri_Red1
  Calcite_Red_150: '#e4a793', // previously Esri_Red2
  Calcite_Red_200: '#c86a4a', // previously Esri_Red3
  Calcite_Red_250: '#c6542d', // previously Esri_Red4
  Calcite_Red_a100: '#e04f1d',
  Calcite_Red_a150: '#c7461a', // aa AA | background with white text – passes accessibility
  Calcite_Red_a200: '#ab3c16', // aa AA | background with white text – passes accessibility
  Calcite_Red_a250: '#8c2907', // aa AA | background with white text – passes accessibility
  Calcite_Purple_100: '#e5e1ef', // previously Esri_Purple1
  Calcite_Purple_150: '#c4bcdc', // previously Esri_Purple2
  Calcite_Purple_200: '#9081bc', // previously Esri_Purple3
  Calcite_Purple_250: '#7b6ca7', // previously Esri_Purple4
  Calcite_Purple_a100: '#846ebf',
  Calcite_Purple_a150: '#7461a8',
  Calcite_Purple_a200: '#61518c',
  Calcite_Purple_a250: '#4f4273',
  Calcite_Brown_100: '#e8ddd3', // previously Esri_Brown1
  Calcite_Brown_150: '#d2b38f', // previously Esri_Brown2
  Calcite_Brown_200: '#b78a54', // previously Esri_Brown3
  Calcite_Brown_250: '#a57946', // previously Esri_Brown4
  Calcite_Brown_a100: '#bf813a',
  Calcite_Brown_a150: '#a67032', // replaces Esri_Yellow6. Use in Warning Messages
  Calcite_Brown_a200: '#8c5e2a',
  Calcite_Brown_a250: '#734d22',

  Calcite_Gray_100: '#f8f8f8', // 3%, previously Esri_Gray100. background
  Calcite_Gray_150: '#f4f4f4', // 4%, previously Esri_Gray105
  Calcite_Gray_200: '#efefef', // 6%, previously Esri_Gray110
  Calcite_Gray_250: '#e7e7e7', // 10%, previously Esri_Gray115
  Calcite_Gray_300: '#e0e0e0', // 12%, previously Esri_Gray120
  Calcite_Gray_350: '#cccccc', // 20%, previously Esri_Gray125
  Calcite_Gray_400: '#a9a9a9', // 30%, previously Esri_Gray130
  Calcite_Gray_450: '#959595', // 40%, previously Esri_Gray135
  Calcite_Gray_500: '#828282', // 50%, previously Esri_Gray140
  Calcite_Gray_550: '#6e6e6e', // 56%, previously Esri_Gray145
  Calcite_Gray_600: '#595959', // 65%, previously Esri_Gray150
  Calcite_Gray_650: '#4c4c4c', // 70%, previously Esri_Gray155. body text
  Calcite_Gray_700: '#323232', // 80%, previously Esri_Gray160

  Calcite_Highlight_Blue_100: '#e2f1fb', // hovered, previously Esri_Blue1. NOTE--Esri_Blue2 was removed in Calcite Colors v8.00 due to it being so similar to Calcite_Highlight_Blue_100 and 150
  Calcite_Highlight_Blue_150: '#c5e5f9', // hovered & selected, previously Esri_Blue5
  Calcite_Highlight_Blue_200: '#aadbfa', // selected (toggled), previously Esri_Blue6
  Calcite_Highlight_Blue_250: '#90cdf2', // pressed, previously Esri_Blue7
  Calcite_Highlight_Blue_300: '#80bce0', // border on hover, previously Esri_Blue3, previously 7FBBDF
  Calcite_Highlight_Blue_350: '#0079c1', // previously Esri_Blue
  Calcite_Highlight_Blue_400: '#005e95', // previously Esri_BlueDark
  Calcite_Highlight_Green_100: '#cfedcc', // hovered, previously Esri_Green11
  Calcite_Highlight_Green_150: '#b0e2b0', // hovered & selected, previously Esri_Green15
  Calcite_Highlight_Green_200: '#96ce96', // selected (toggled), previously Esri_Green16
  Calcite_Highlight_Green_250: '#7dc17d', // pressed, previously Esri_Green17
  Calcite_Highlight_Green_300: '#7bb974', // border on hover, previously Esri_Green13
  Calcite_Highlight_Green_350: '#31872e', // previously Esri_Green
  Calcite_Highlight_Green_400: '#2b622b', // previously Esri_GreenDark

  Calcite_Vibrant_Blue_100: '#c7e9ff',
  Calcite_Vibrant_Blue_150: '#69dcff',
  Calcite_Vibrant_Blue_200: '#00dee7',
  Calcite_Vibrant_Blue_250: '#b3e9f9', // only for use inside icons, to show "selection"
  Calcite_Vibrant_Yellow_100: '#ffefb7', // replaces Esri_Yellow5. Use in Warning Messages along with Calcite_Brown_350, which replaces Esri_Yellow6
  Calcite_Vibrant_Yellow_150: '#fad817',
  Calcite_Vibrant_Yellow_200: '#fff000',
  Calcite_Vibrant_Green_100: '#daffd9',
  Calcite_Vibrant_Green_150: '#71de6e',
  Calcite_Vibrant_Green_200: '#a5e800',
  Calcite_Vibrant_Red_100: '#ffc0b3', // replaces Esri_Red5. Use in Error Messages with Calcite_Vibrant-Red_200
  Calcite_Vibrant_Red_150: '#ff642e',
  Calcite_Vibrant_Red_200: '#de2900', // replaces Esri_Red6. Use in Error Messages with Calcite_Vibrant-Red_100
  Calcite_Vibrant_Purple_100: '#daccff',
  Calcite_Vibrant_Purple_150: '#b096ff',
  Calcite_Vibrant_Purple_200: '#f185ff',
  Calcite_Vibrant_Brown_100: '#ffdbb3',
  Calcite_Vibrant_Brown_150: '#db8d2f',
  Calcite_Vibrant_Brown_200: '#ffbc6b'
};

export default EsriColors;
