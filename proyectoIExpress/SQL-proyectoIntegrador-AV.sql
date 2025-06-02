CREATE SCHEMA proyectoIntegrador_AV;
USE proyectoIntegrador_AV;

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL, 
email VARCHAR(100) NOT NULL,
contrasenia VARCHAR(100) NOT NULL,
fecha DATETIME  NOT NULL,
dni INT UNSIGNED NOT NULL,
fotoPerfil VARCHAR(300),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED NOT NULL,
nombre_foto_producto VARCHAR(300) NOT NULL,
nombre_producto VARCHAR(100) NOT NULL,
descripcion_producto VARCHAR(400) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);



CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
id_producto INT UNSIGNED NOT NULL,
texto_comentario VARCHAR(200), 
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

INSERT INTO usuarios (email, nombre, contrasenia, fecha, dni, fotoPerfil)
VALUES ('Alfonso123@gmail.com', "Alfonso" 'alfon2006', '2006-08-02', 47394092, '/images/users/default-image.png'),
	   ('german@gmail.com', "German", 'Casa282', '1984-10-08', 32928367, '/images/users/default-image.png'),
       ('Serenita45@gmail.com', "Serentia", 'Eljardinrosado', '2008-12-30', 49229034, '/images/users/default-image.png'),
	   ('tecnoboy2500@gmail.com', "Bautista", 'Cattaneo55', '2000-07-30', 42778290, '/images/users/default-image.png'),
	   ('vicente2948@gmail.com', "Vicente", 'Medicenpando', '2003-04-16', 44985466, '/images/users/default-image.png');


INSERT INTO productos (usuario_id, nombre_foto_producto, nombre_producto, descripcion_producto)
VALUES (1, "/images/products/img-airpods-pro-max.jpg", "Apple Airpods Pro Max", "Cancelación de ruido líder, comodidad de lujo y la magia Apple en cada nota"),
	   (2, "/images/products/img-macbook-pro-2019.jpg", "Macbook Pro", 
		"Macbook Pro 2019, excelente estado"),
	   (3, "/images/products/img-apple-watch.jpg", "Apple Watch", 
		"Tu salud, notificaciones y pagos en la muñeca, con estilo y la precisión de Apple"),
	   (4, "/images/products/img-apple-ipad-2022.jpg", "Modelo 3D Apple Ipad 2022", 
		"Pantalla vibrante y lápiz de precisión para crear, estudiar y trabajar donde quieras"),
	   (5, "/images/products/img-auriculares-earpods.jpg", "Auirculares Apple Earpods", 
		"sonido nítido, control en línea y ajuste cómodo. Calidad Apple al mejor precio."),
	   (1, "/images/products/iphone-15-pro-128gb.jpg", "Iphone 15 Pro Max", 
		"Iphone 15 Pro Max en perfecto estado, mas potencia, mejor camara y tecnologia de ultimo nivel"),
	   (2, "/images/products/vision-pro.jpg", "Apple Vision Pro", 
		"Viví el futuro hoy con Apple Vision Pro: realidad mixta, pantallas envolventes y control con tus ojos, manos y voz. Envios gratis a todo el pais"),
	   (3, "/images/products/img-apple-TV-4K.jpg", "Apple Tv 4k", 
		"Streaming ultrarrápido, imagen Dolby Vision y todo el universo Apple en un solo dispositivo"),
	   (4, "/images/products/img-apple-homePod.jpg", "Apple HomePod Mini", 
		"Sonido envolvente premium, Siri integrada y control total de tu casa con solo tu voz"),
       (5, "/images/products/img-AirTag.jpg", "AirTag", 
		"Ponelo en llaves, bolso o bici y encontralos al instante con la red Buscar de Apple");
        
        
INSERT INTO comentarios (id_producto ,id_usuario, texto_comentario)
VALUES (1, 1,  'Increible para mis actividades de gimnasia, muy practicos y faciles de usar'),
	   (1, 2,  'Excelente producto, bueno, bonito y grandioso en precio calidad'),
	   (1, 3,  'Me esperaba mucho menos, de las mejores compras que he hecho'),
	   (2, 4,  'Perfecta la computadora, rapida y liviana'),
	   (2, 5,  'Excelnte computadora para programar y jugar videojuegos'),
	   (2, 2, 'Soy programador y me sirvio muchisimo'),
	   (3, 1,  '¡Todo lo que nececitaba para el dia a dia!'),
	   (3, 4,  'Estoy facinado, muy util. Excellente compra'),
	   (3, 3,  'Muy caro a mi parecer, solo sirve para el deporte'),
	   (4, 5,  '¡Se ve increible! Me sirve para trabajar en cualquier lado'),
	   (4, 2,  'Muy caro y no de buena calidad, lo estoy devolviendo, ¡No lo compres!'),
	   (4, 1,  '¡Exactamente lo que estaba buscando! Basta de hojas, cuidemos el planeta'),
	   (5, 3,  'Son buenisimos y no muy caros'),
	   (5, 5,  'Son un poco incomodos'),
	   (5, 4,  'Practicos y no se me pierden, justo lo que buscaba'),
	   (6, 5,  '¡Se ve tentador! increible las tecnologias nuevas que salen cada dia'),
	   (6, 3,  'Compre uno la semana pasada y es increible la variedad de cosas que se pueden hacer, ¡totalmente recomendado!'),
	   (6, 4, "Muy util y facil de usar"),
	   (7, 1,  'Pesimo servicio, me llego dos meses despues y no me funciona del todo bien'),
	   (7, 2,  'Interesante el producto, pero un precio muy elevado para la utilidad que tiene'),
	   (7, 1, "Es innovador, pero innecesario, le doy un 5 de 10"),
	   (8, 4,  'Multifuncional, la mejor experiencia para mi y mis hijos'),
	   (8, 5,  'Muy practico, excellente producto'),
	   (8, 3,  'Envio muy rapido y en perfecto estado. Gran compra.'),
	   (9, 2,  'Me genera siempre un gran ambiente en la casa, excellente producto'),
	   (9, 1,  'Se me rompio a las 2 semanas, le tenia mayor expectativa'),
	   (9, 2,  'Comodo y util, ¡Este producto es genial!'),
	   (10, 3, 'Me funciono bien, ¡gran precio calidad!'),
	   (10, 4, 'Desde ahora que ya no pierdo mas nada, ¡Me hacia falta!'),
	   (10, 5, 'Excellente producto');
