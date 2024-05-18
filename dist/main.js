"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3000', '*'],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Niyo Group Technical Interview')
        .setDescription(' a very basic todo backend built with nestjs and an sqlite database for the purpose of the technical interview along with a websocket server that logs created tasks ')
        .addApiKey({
        name: 'authorization',
        type: 'apiKey',
    })
        .setContact('daniel tambee', '', 'danieltambee@gmail.com')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    await app.listen(process.env.WORKER_PORT || 3000);
    const logger = new common_1.Logger('App', {
        timestamp: true,
    });
    logger.verbose('*****************************************************');
    logger.verbose('*****    app running on port 3000             *******');
    logger.verbose('*****                                         *******');
    logger.verbose('*****  (1)connect with  socket.io client      *******');
    logger.verbose('*****  (2)subscribe to "taskCreated" event    *******');
    logger.verbose('*****  http://localhost:3000/api for docs     *******');
    logger.verbose('*****                                         *******');
    logger.verbose('*****        Thank you  🚀🚀🚀🚀              *******');
    logger.verbose('*****                                         *******');
    logger.verbose('*****************************************************');
}
bootstrap();
//# sourceMappingURL=main.js.map