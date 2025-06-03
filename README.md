This project contains a simplified [server](server) and [mobile app](mobile) that enable a user to step-by-step complete what we call a Know Your Customer (KYC) questionnaire.

## Prerequisites

- A recent version of [mise-en-place](https://mise.jdx.dev/), which will install and configure the required toolchain to build and run the server and apps.
- For iOS, have setup XCode and an iOS Simulator or device in Developer Mode. [See here](https://reactnative.dev/docs/set-up-your-environment).
- For Android, have setup the Android SDK and either an physical or virtual Android Device. [See here](https://reactnative.dev/docs/set-up-your-environment?platform=android).


## Quick Start

First, setup the toolchain

```sh
mise use
```

## Protobuf

You need to compile the [Protobuf](https://protobuf.dev/) definitions

```sh
cd ./api
buf generate
```

## Server

First, install the servers dependencies

```sh
go mod tidy
```

You can then start the server using...
```sh
go run server/main.go
```

## Mobile

First, install dependencies

```bash
cd ./mobile
npm i
cd ios
pod install
cd ../
```

Then, for iOS...

```bash
npm run ios
```

Or, for Android...

```bash
npm run android
```

The app should build, install and launch on your respective device/emulator ready for development.

## What to do?

Review the PR in the interview by talking through the changes.
Do not comment on the PR in GitHub.