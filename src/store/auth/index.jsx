import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   currentAccount: {
      id: 1,
      username: 'malenia32',
      fullName: 'Real_Malenia',
      avatar: 'https://www.gamerguides.com/assets/media/14/1488/malenia_blade_of_miquella.png'
   },
   accounts: [
      {
         id: 1,
         username: 'malenia32',
         fullName: 'Real_Malenia',
         avatar: 'https://www.gamerguides.com/assets/media/14/1488/malenia_blade_of_miquella.png'
      },
      {
         id: 2,
         username: 'shabriri_girl',
         fullName: 'FrenzyHyetta',
         avatar: 'https://www.gamerguides.com/assets/media/14/530/Hyetta.png'
      },
   ]
}
      _setCurrentAccount: (state,action) => {
         state.currentAccount = action.payload
      }
   }
})

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions
export default auth.reducer