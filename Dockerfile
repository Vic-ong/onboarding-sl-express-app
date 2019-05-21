FROM node:10.15.3

ENV APP_DIR=/app

COPY package.json $APP_DIR/package.json

RUN cd $APP_DIR \
    && npm install \
    && npm install -g forever \

COPY . $APP_DIR

WORKDIR $APP_DIR

EXPOSE 3000

CMD ["forever", "-a", "-o", "/tmp/out.log", "-e", "/tmp/err.log", "--watch", "--watchDirectory", "./api", "node_modules/@shopline/sl-express/lib/server.js"]
