#!/bin/bash
set -e

#color variables
RESET_COL="\e[0m"
ERROR_COL="${RESET_COL}\e[30;101m"
IMPORTANT_COL="${RESET_COL}\e[2;30;103m"
INFO_COL="${RESET_COL}\e[36m"
HIGHLIGHT_COL="${RESET_COL}\e[1;33m"
SECTION_COL="${RESET_COL}\e[100;97m"
OK_COL="${RESET_COL}\e[1;30;42m"
QUESTION_COL="${RESET_COL}\e[3;44;97m"

#mandatory argument counter
COUNTER=0

function usage(){

	echo -e ""
	echo -e "${INFO_COL}Usage\e[0;39;49m: $0 ${HIGHLIGHT_COL}<--debug> <--test>${RESET_COL}"
	echo -e "${INFO_COL} \t- --debug is the minimal version for testing ${RESET_COL}"
	echo -e "${INFO_COL} \t- --test is the \"final\" product ${RESET_COL}"
	echo -e "${INFO_COL} \t- Please specify if debug or test mode ${RESET_COL}"

}

for ARG in "$@"
do
    if [[ "${ARG}" == "--debug" ]]; then
    sed -i 's/false/true/' ./src/variables/DEBUG.ts
    fi
    if [[ "${ARG}" == "--test" ]]; then
    sed -i 's/true/false/' ./src/variables/DEBUG.ts
    fi
    COUNTER=$((COUNTER + 1))
done


if [ ${COUNTER} != 1 ]; then
    echo -e "${ERROR_COL}invalid number of arguments ! ${RESET_COL}"
    usage
    exit 1  
fi



rm -rf ./build
rm -rf ./dist
npm run build
npm run start
