# ChatMos Software Design Document

## 1. Vision
The bulk of mankind uses social networks to interact with their local and global groups. It is the mission of Chatmos to solve the issue of  censorship and the risks of Governance Communication

Consider how Cosmos governance works. Cosmos requires you to vote for proposals with your tokens. This strategy, however, has flaws.
1. Too many proposals.
2. Proposals are too technical or not relevant to regular users.
3. People vote by following prominent figures that tell them what to do.

While some proposals are too technical or not relevant to the regular user, it quickly becomes too time-consuming to stay on top of governance voting

### 1 Audiences

There will be different types of users who may be interested in using ChatMos. Chatmos is a social Hub built for the cosmos Ecosystem

#### a Cosmos Ecosystem Validators
#### b Cosmos Ecosystem Delegators
#### c Cosmos Ecosystem Token Holders
#### d Anyone Interested In The Ecosystem(Blockchain Enthusiast)

## 2. System Overview

Dither is a collection of open source components that works together to enable an uncensorable and decentralized social network for web and mobile devices. User interaction on Dither is powered by the Cosmos Hub blockchain. User data is stored in an SQL database that is written to by a transaction indexing tool that we create.

### 2.1 Features

Dither needs to meet a set of functionaity requirements, listed below.

#### 2.1.1 Follow

Users need to be able to follow another user's account. When they follow a user's account, that user should get a notification that they gained this new follower. The user should also be able to unfollow another user at any time. This transaction should be on-chain.

A user's homepage feed consists primarily of the latest posts from the people they follow.

#### 2.1.2 Post

Users need to be able to post new dithers. Due to the limitations of the Cosmos Hub memo field, Dithers are chunks of content that contain at most 512 bytes of data. The data is formatted in JSON and can include just about anything. When the user hits post, the dither content is validated and then is broadcasted via a Cosmos Hub transaction. Once the transaction is validated by the Cosmos Hub, the dither content is appended to database via the Dither Index. The new dither is pushed to all of the users followers, appearing on their respective homepages.

#### 2.1.3 Search

Users need to be able to search through the dither database created by the Dither Indexer. This is an off-chain query.

#### 2.1.4 Notify

Users should be notified if someone: (1) replies to them, (2) likes their dither, (3) reposts their dither, or (4) starts following them.

#### 2.1.5 Send

Users should able to send ATOM to other users and to other cosmos1 addresses.

### 2.2 System Components

Dither is made up of three core components: (1) the blockchain, (2) the indexer, and (3) the client. This section will detail out these three parts.

#### 2.2.1 Dither Blockchain

Dither is a social network powered by blockchain technology. Currently, this is the Cosmos Hub blockchain. We expect that with future growth, we will strain the limits of the transaction throughput on the Cosmos Hub. Well, either that or the transactions will be too expensive to combat the greater usage. The long-term goal of Dither is to put it onto its own application-specific blockchain.

##### 2.2.1.1 Dither on the Cosmos Hub

For at least first year of development, we expect that we will be piggy-backing off of the Cosmos Hub blockchain.

##### 2.2.1.2 Dither on an application-specific blockchain

Going into the second year, we will have the resources to research, build and launch a custom blockchain for Dither.

#### 2.2.2. Dither Indexer

The Dither Indexer is a database that interacts with a Cosmos Hub full node to query for and store information. It is the primary data store for Dither and is queried by various front-ends to allow users to sign up, login, view, send, and query for messages.

#### 2.2.3 Dither Client

THe Dither client is an interchangeable component of Dither. We plan on building and maintaining three separate clients in order to be as accessible to as large of an audience as possible.

##### 2.2.3.1 Dither Web
The Dither Web Client is a graphical user interface built with modern web technologies. It is the first client that we will build for Dither, and it will serve as the reference implementation for the iOS and Android applications.

##### 2.2.3.2 Dither iOS
The iOS Client is a full-featured Dither application for recent iOS devices.

##### 2.2.3.3 Dither Android
The Android Client is a full-featured Dither application for recent Android devices.

## 3. Dither Client Specification

### 3.1 Application Routes

Note that `(auth)` means that the user needs to be logged in, and that `(no-ui)` means this route doesn't have a page associated with it, and it should redirect the user to another page.

* /explore - The homepage for signed out users. Encourages users to sign up for a new account.
* /welcome - (no-ui) This is the signup flow for new users
  * /welcome/signup - First step of signup, accepts a username and password.
      * Field - Username
      * Field - Password
      * Button - Continue
  * /welcome/wallet - Second step signup that creates a wallet for the user
      * Text - Explanation of what this wallet is for
      * Text - Displays the private key for the user to backup manually
      * Button - I've backed up my mnemonic
  * /welcome/wallet-confirm - Second step signup that creates a wallet for the user
      * Textarea - Requests the user to input part of their private key
      * Text - Displays checkmark if the private key is correct
      * Button - Start over and generate a new wallet
      * Button - Continue
  * /welcome/tokens - Third step signup that somehow gives tokens to the user
      * Button - Get tokens
      * Text - Displays the current user balance
      * Button - I have tokens!
  * /welcome/follow - Fourth step of signup that encourages the user to follow some accounts.
* /login - Displays a form to allow registered users to login.
* /index - (auth) The homepage for signed in users. Displays recent messages posted by signed-in users's following
* /accounts - (no-ui)
  * /accounts/:account - Displays recent messages posted by a specific account.
  * /accounts/:account/messages/:message - Displays a specific message posted by a specific account.
* /notifications - (auth) Displays a list of notifications for the signed-in user.
* /search - (no-ui) supports queries for block height, transaction hash, @username, cosmos address, hashtag, or plaintext.
  * /search/:height - Displays messages posted on a specific block height
  * /search/:hash - Displays a specific message with this transaction hash
  * /search/:username - Displays users that have a similar username to the query
  * /search/:address - Displays recent messages posted by a specific address
  * /search/:hashtag - Displays recent messages with a specific hashtag
* /account - (no-ui) These pages apply to a specific user.
  * /account/wallet - (auth) Displays a user's cosmos address and token balance, a form to send tokens to a username or cosmos address, and also a list of historical transactions
  * /account/settings - (auth) Displays forms to allow users to change their username, avatar, and other application settings.
  * /account/forgot - Displays a form to allow signed-out users to reset their password

### 3.2 App Components

* cardMessage
* cardAccount
* pageHeaderAccount
* appHeader
* appMenu

## 4. Roadmap

See the [roadmap](./roadmap.md).
