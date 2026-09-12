pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Configured under Jenkins > Global Tool Configuration
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Backend - Install & Test') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Frontend - Install & Build') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm test -- --passWithNoTests'
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}