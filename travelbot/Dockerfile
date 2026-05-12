# --- Étape 1 : Build (Compilation) ---
# On utilise Maven avec Eclipse Temurin (très stable)
FROM maven:3.8.5-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# --- Étape 2 : Run (Exécution) ---
# On utilise l'image JRE légère d'Eclipse Temurin
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]