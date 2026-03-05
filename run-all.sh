#!/bin/bash
# Скрипт для последовательного запуска всех нагрузочных тестов JMeter

# Путь к jmeter.bat (измените, если у вас другой)
JMETER="/c/JMeter/apache-jmeter-5.6.3/bin/jmeter.bat"

# Запуск тестов
echo "Запуск теста на 10 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing10.jmx" -l "reports/results10.jtl" -e -o "reports/report10"

echo "Запуск теста на 100 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing100.jmx" -l "reports/results100.jtl" -e -o "reports/report100"

echo "Запуск теста на 500 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing500.jmx" -l "reports/results500.jtl" -e -o "reports/report500"

echo "Запуск теста на 1000 пользователей..."
"$JMETER" -n -t "scripts/jmx/load-testing1000.jmx" -l "reports/results1000.jtl" -e -o "reports/report1000"

echo "Все тесты завершены!"

