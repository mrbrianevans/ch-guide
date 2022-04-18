FROM node:lts

# instead of copying code files, clone the git repo. This provides commit history, used in timestamping posts.
RUN git clone https://github.com/mrbrianevans/ch-guide.git
WORKDIR ch-guide/
RUN npm ci
RUN npm run build
CMD ["npm", "run", "start"]
