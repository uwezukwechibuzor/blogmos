# ChatMos Software Design Document

## 1. Vision
The bulk of mankind uses social networks to interact with their local and global groups. It is the mission of Chatmos to solve the issue of  censorship and the risks of Governance Communication

Consider how Cosmos governance works. Cosmos requires you to vote for proposals with your tokens. This strategy, however, has flaws.
1. Too many proposals.
2. Proposals are too technical or not relevant to regular users.
3. People vote by following prominent figures that tell them what to do.

While some proposals are too technical or not relevant to the regular user, it quickly becomes too time-consuming to stay on top of governance voting

Furthermore, many people lack in-depth technical expertise regarding blockchain technology. As a result, they rely on notable persons or node operators to translate suggestions since they feel these people are community experts. This strategy may fast become harmful since most people listen to the appeals of these popular personalities who can swiftly amass a lot of influence

### 1 Audiences

There will be different types of users who may be interested in using ChatMos. Chatmos is a social Hub built for the cosmos Ecosystem

#### a Cosmos Ecosystem Validators
#### b Cosmos Ecosystem Delegators
#### c Cosmos Ecosystem Token Holders
#### d Anyone Interested In The Ecosystem(Blockchain Enthusiast)

## 2. System Overview

ChatMos is a set of open source components that work together to create an uncensorable and decentralized social network for web and mobile devices. User participation and conversations focus mostly on the governance modules of Cosmos apps and, more broadly, what is going on in the Ecosystem. Proposals from all cosmos ecosystems will be retrieved, maintained in a centralized database, and shown for chatmos users in the form of postings ranging from the chain that has the newest proposal in its voting period, an uncensored comment area will be formed. This is similar to Twitter, except the postings that people remark on are the proposals, and there is a discussion-style chat to assist both technical and non-technical users.

Secondly, it would a space for cosmos Ecosystem

### 2.1 Features

Chatmos needs to meet a set of functionaity requirements, listed below.

#### 2.1.1 Follow

Users must be able to follow the accounts of other users. When they follow a user's account, the user should be notified that they now have a new follower. At any moment, the user should be able to unfollow another user.
A user's homepage feed consists primarily of the latest posts from the people they follow.

#### 2.1.2 Post

Users are able make a post on their timeline known as chatmos. The new chatmos is pushed to all of the users followers, appearing on their respective homepages.

#### 2.1.3 Search

Users need to be able to search through the chatmos database.

#### 2.1.4 Notify

Users should be notified if someone: (1) replies to them, (2) likes their chatmos, (3) reposts their chatmos, or (4) starts following them.

#### 2.1.5 Proposals & Comments Sections

All ecosystem proposals will be fetched from all blockchains, this will serve as posts with comment sections for discussion by the community

Users should be able to comment on proposals on the comment sections if they sign up with their wallet else they cannot comment

#### 2.1.6 chat system

Users should be able to chat up anyone and create discussion sections

### 2.2 System Components

Dither is made up of three core components: (1) the blockchain, (2) the indexer, and (3) the client. This section will detail out these three parts.

#### 2.2.1 Dither Blockchain

ChatMos is a social Hub for cosmos Ecosystem powered by the Governance Module of cosmos SDK applications. Currently, this is the Cosmos Hub blockchain. We expect that with future growth, we will strain the limits of the transaction throughput on the Cosmos Hub. Well, either that or the transactions will be too expensive to combat the greater usage. The long-term goal of Dither is to put it onto its own application-specific blockchain.

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


### 3.1 App Components

* cardMessage
* cardAccount
* pageHeaderAccount
* appHeader
* appMenu

## 4. Roadmap

See the [roadmap](./roadmap.md).
