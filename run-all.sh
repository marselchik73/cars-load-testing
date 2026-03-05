#!/bin/bash
# Скрипт для последовательного запуска всех нагрузочных тестов JMeter
# Каждый прогон сохраняется в отдельную папку с временной меткой

JMETER="/c/JMeter/apache-jmeter-5.6.3/bin/jmeter.bat"

# Создаём уникальную папку для этого прогона с меткой времени
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
RUN_DIR="reports/$TIMESTAMP"
mkdir -p "$RUN_DIR"

echo "Результаты этого прогона будут сохранены в: $RUN_DIR"
echo "----------------------------------------"

# Запуск теста на 10 пользователей
echo "Запуск теста на 10 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing10.jmx" -l "$RUN_DIR/results10.jtl" -e -o "$RUN_DIR/report10"

# Запуск теста на 100 пользователей
echo "Запуск теста на 100 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing100.jmx" -l "$RUN_DIR/results100.jtl" -e -o "$RUN_DIR/report100"

# Запуск теста на 500 пользователей
echo "Запуск теста на 500 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing500.jmx" -l "$RUN_DIR/results500.jtl" -e -o "$RUN_DIR/report500"

# Запуск теста на 1000 пользователей
echo "Запуск теста на 1000 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing1000.jmx" -l "$RUN_DIR/results1000.jtl" -e -o "$RUN_DIR/report1000"

echo "Все тесты завершены! Результаты в папке: $RUN_DIR"

