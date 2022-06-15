FROM node:16-alpine as builder

ARG appName=""
WORKDIR /usr/src/

# Copy the source & library files
COPY ./package*.json yarn.lock lerna.json ./
COPY ./apps/${appName} ./apps/${appName}
COPY ./packages ./packages

RUN yarn install --development --frozen-lockfile \
    && yarn clean \
    && yarn install --production --frozen-lockfile

# Get dumb-init
RUN wget -O /usr/src/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64 \
    && chmod +x /usr/src/dumb-init

FROM node:16-alpine

ARG appName=""

COPY --from=builder /usr/src /usr/src

WORKDIR /usr/src/apps/${appName}

# Change entry point
ENTRYPOINT ["/usr/src/dumb-init", "--"]
CMD ["npm", "start"]
