# --- Étape 1 : Build (Compilation) ---
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
# Copie le pom.xml et télécharge les dépendances (cache Docker)
COPY pom.xml .
RUN mvn dependency:go-offline
# Copie le code source et compile le projet
COPY src ./src
RUN mvn clean package -DskipTests

# --- Étape 2 : Run (Exécution) ---
FROM openjdk:17-jdk-slim
WORKDIR /app
# On récupère uniquement le JAR généré à l'étape précédente
COPY --from=build /app/target/*.jar app.jar
# Port par défaut pour Spring Boot
EXPOSE 8080
# Lancement de l'application
ENTRYPOINT ["java", "-jar", "app.jar"]