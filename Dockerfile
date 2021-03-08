#ARG IMAGE=store/intersystems/iris-community:2019.3.0.302.0
#ARG IMAGE=store/intersystems/iris-community:2019.4.0.379.0
#ARG IMAGE=store/intersystems/iris-community:2020.2.0.204.0
ARG IMAGE=intersystems/iris:2020.2.0.211.0

FROM $IMAGE

USER root

COPY --chown=${ISC_PACKAGE_IRISUSER}:${ISC_PACKAGE_MGRGROUP} ./httpd-local.conf ${ISC_PACKAGE_INSTALLDIR}/httpd/conf

WORKDIR /opt/app
RUN chown ${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} /opt/app && \
    mkdir ${ISC_PACKAGE_INSTALLDIR}/csp/bestofferui && \ 
    chown ${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} ${ISC_PACKAGE_INSTALLDIR}/csp/bestofferui 
    # && \
    # chown ${ISC_PACKAGE_IRISUSER}:${ISC_PACKAGE_MGRGROUP} ${ISC_PACKAGE_INSTALLDIR}/httpd/conf

USER irisowner

COPY  ./Installer.cls ./
COPY  ./src ./src
COPY --chown=${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} ./bestofferui ${ISC_PACKAGE_INSTALLDIR}/csp/bestofferui
COPY --chown=${ISC_PACKAGE_MGRUSER}:${ISC_PACKAGE_IRISGROUP} ./iris.key ${ISC_PACKAGE_INSTALLDIR}/mgr


RUN iris start $ISC_PACKAGE_INSTANCENAME quietly && \
    /bin/echo -e \
            "zn \"%SYS\"\n" \
            " Do ##class(Security.Users).UnExpireUserPasswords(\"*\")\n" \
            "zn \"USER\"\n" \
            " Do \$system.OBJ.Load(\"/opt/app/Installer.cls\",\"ck\")\n" \
            " Set sc = ##class(App.Installer).setup(, 3)\n" \
            " If 'sc do \$zu(4, \$JOB, 1)\n" \
            " halt" \
    | iris session $ISC_PACKAGE_INSTANCENAME && \
    /bin/echo -e "sys\nsys\n" \
    | iris stop $ISC_PACKAGE_INSTANCENAME quietly

CMD [ "-l", "/usr/irissys/mgr/messages.log" ]