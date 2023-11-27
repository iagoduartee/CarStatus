package br.com.carstatusapi;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@ComponentScan({ "br.com.carstatusapi.*" })
public class CarStatusApiApplication {
	private static final Logger logger = LoggerFactory.getLogger(CarStatusApiApplication.class);
	public static void main(String[] args) {
		logger.info("TESTE");
		SpringApplication.run(CarStatusApiApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		logger.info("TESTE CORS");
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")
						.allowedOrigins("http://localhost:3000/") // Replace with your allowed origin(s)
						.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD", "TRACE", "CONNECT")
						.allowedHeaders("*"); //
			}
		};
	}
}
