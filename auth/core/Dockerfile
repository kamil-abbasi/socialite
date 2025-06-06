FROM quay.io/keycloak/keycloak:26.2.5 AS base

FROM base AS dev

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]

FROM base AS prod

RUN /opt/keycloak/bin/kc.sh build

EXPOSE 8080

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start"]