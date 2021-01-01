'use strict';

import React, { Component, useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image, StatusBar, SafeAreaView, ScrollView,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import socketIOClient from 'socket.io-client';

const ENDPOINT ="http://localhost:3000";

export default class Testing extends Component<{}> {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header />
                        {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                                <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                        )}
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Setting up the testing</Text>
                                <TimeGet />
                                <TestTree name = 'lemon tree' />
                                <Text style={styles.sectionDescription}>
                                    <Text style={styles.highlight}>Share an Orchard</Text> let's get started!
                                </Text>
                            </View>
                        </View>
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1
                            }}
                            defaultValue="You can type in me"
                        />
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const TimeGet = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });
    }, []);
    return <Text style={styles.sectionTitle}>Share an Orchard time{response}</Text>;
}

const TestTree = (tree) => {
    const [isAlive, setIsAlive] = useState(false);
    return (
        <View>
            <Text>
                I am {tree.name}, and I am {isAlive ? "alive" : "dead"}!
            </Text>
            <Button
                onPress={() => {
                    setIsAlive(true);
                }}
                disabled={isAlive}
                title={isAlive ? "Thank you!" : "Water me!"}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
});
