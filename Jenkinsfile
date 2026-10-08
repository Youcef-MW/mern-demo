pipeline {
  agent any

  tools {
    nodejs 'NodeJS-24'
  }

  environment {
    IMAGE_TAG = "${env.BUILD_NUMBER}"
  }

  stages {

    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/Youcef-MW/mern-demo.git'
      }
    }

    stage('Test Backend') {
      steps {
        dir('backend') {
          sh 'npm install'
          sh 'npm test'
        }
      }
    }

    stage('Test Frontend') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'CI=true npm test --passWithNoTests'
        }
      }
    }

    stage('Build Docker Images') {
      steps {
        sh 'docker build -t mern-backend:$IMAGE_TAG ./backend'
        sh 'docker build -t mern-frontend:$IMAGE_TAG ./frontend'
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl set image deployment/backend backend=mern-backend:$IMAGE_TAG -n mern-app'
        sh 'kubectl set image deployment/frontend frontend=mern-frontend:$IMAGE_TAG -n mern-app'

        sh 'kubectl rollout status deployment/backend -n mern-app'
        sh 'kubectl rollout status deployment/frontend -n mern-app'
      }
    }

  }
}