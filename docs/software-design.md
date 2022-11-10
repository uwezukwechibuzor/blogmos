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

ChatMos is a set of open source components that work together to create an uncensorable and decentralized social network for web and mobile devices. User participation and conversations focus mostly on the governance modules of Cosmos apps and, more broadly, what is going on in the Ecosystem. Proposals from all cosmos ecosystems will be retrieved, maintained in a centralized database, and shown to chatmos users in form of tweets ranging from the chain that has the newest proposal in its voting period, an uncensored comment area will be formed. This is similar to Twitter, except the posts that people remark on are the proposals, and there is a discussion-style chat to assist both technical and non-technical users.

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

All ecosystem proposals will be fetched from all blockchains, this will serve as posts with an uncensored comment sections for discussions by the community

Users should be able to comment on proposals on the comment sections if they sign up with their wallet else they cannot comment

#### 2.1.6 chat system

Users should be able to chat up anyone and create discussion sections

### 2.2 System Components

chatmos will be made up of different components including a centralised database and backend server where querying of the ecosystem proposals will done. 

This will be achieved with the help of a cron job so when new proposals are made, it will be queried.

### 3 Why Chatmos?

Risks of Governance Communication

Consider how Cosmos governance works. Cosmos requires you to vote for proposals with your tokens. This strategy, however, has flaws.

Too many proposals.

Proposals are too technical or not relevant to regular users.

People vote by following prominent figures that tell them what to do.

While some proposals are too technical or not relevant to the regular user, it quickly becomes too time-consuming to stay on top of governance voting.

On top of that, many people don’t have in-depth technical knowledge about blockchain technology. For that reason, they rely on prominent figures or node operators to translate proposals as they believe these people are community experts. This approach can quickly become dangerous as most people listen to the calls of these prominent figures who can quickly gain a lot of power.

Cosmos, for example, allows governance token holders to delegate their vote. Most often, they choose a node operator to allow them to vote in their turn as it is much easier with minimal risks. However, you put your trust in the hands of this validator.

As Mario Laul, a well-known figure in the space of Technology Governance, says, a decentralized network’s governance is strongly influenced by political communication, this requires professionalization. Mario Laul acknowledges that there’s a clear risk that a validator can provide false arguments to win a proposal that favors this person.

Is Decentralized Governance Genuinely Decentralized?

what of Delegators who donot vote and have no technical knowledge?
Even though a project relies on decentralized governance, decentralized governance relies on centralized actions. projects should consider professionalizing the communication for proposals and provide human-understandable versions that clearly state pros and cons.

