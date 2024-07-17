import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import * as Updates from "expo-updates";
import React, { useEffect } from "react";

export default function App() {
  const {
    currentlyRunning,
    isUpdateAvailable,
    isUpdatePending,
    downloadError,
    checkError,
    initializationError,
    availableUpdate,
    downloadedUpdate,
    isChecking,
    isDownloading,
  } = Updates.useUpdates();

  useEffect(() => {
    if (isUpdatePending) {
      // Update has successfully downloaded; apply it now
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);

  // If true, we show the button to download and run the update
  const showDownloadButton = isUpdateAvailable;

  // Show whether or not we are running embedded code or an update
  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? "This app is running from built-in code"
    : "This app is running an update";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>{Constants.expoConfig.name}</Text>
          <Image source={require("./assets/favicon.png")} />
          <Text style={styles.headerText}>Updates Demo</Text>
          <Text>Runtype Message: {runTypeMessage}</Text>
          <Button
            onPress={() => Updates.checkForUpdateAsync()}
            title="Check manually for updates"
          />
          {showDownloadButton ? (
            <Button onPress={() => Updates.fetchUpdateAsync()} title="Download and run update" />
          ) : null}
          <Text>Download error: {JSON.stringify(downloadError)}</Text>
          <Text>Check Error: {JSON.stringify(checkError)}</Text>
          <Text>Init Error: {JSON.stringify(initializationError)}</Text>
          <Text>Available Update: {JSON.stringify(availableUpdate)}</Text>
          <Text>Downloaded Update: {JSON.stringify(downloadedUpdate)}</Text>
          <Text>Is checking: {isChecking}</Text>
          <Text>Is downloading: {isDownloading}</Text>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {},
});
