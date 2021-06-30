<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="checkEthereum">Click me!</button>
    <button @click="connetWallet">Connect Wallet!</button>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VConsole from "vconsole";
import Onboard from "bnc-onboard";
import Web3 from "web3";
import { ethers } from "ethers";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    new VConsole();
    console.log("routes", this.$route);
    console.log("store", this.$store)
  },
  methods: {
    checkEthereum() {
      console.log("window.ethereum", window.ethereum);
      console.log("ethers", ethers.utils.parseEther("1"));
    },
    connetWallet() {
      // set a variable to store instantiated web3
      let web3;

      // head to blocknative.com to create a key
      const BLOCKNATIVE_KEY = "blocknative-api-key";

      // the network id that your dapp runs on
      const NETWORK_ID = 1;

      // initialize onboard
      const onboard = Onboard({
        dappId: BLOCKNATIVE_KEY,
        networkId: NETWORK_ID,
        subscriptions: {
          wallet: (wallet) => {
            // instantiate web3 when the user has selected a wallet
            web3 = new Web3(wallet.provider);
            console.log(`${wallet.name} connected!`);
          },
        },
      });

      console.log("web3", web3);

      // Prompt user to select a wallet
      onboard
        .walletSelect()
        .then(() => {
          // Run wallet checks to make sure that user is ready to transact

          return onboard.walletCheck();
        })
        .then(() => {
          console.log("wallet connected");
        })
        .catch((e) => {
          console.error("error connecting", e);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
