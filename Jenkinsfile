pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/<your-username>/microservice-a.git'
      }
    }

    stage('Install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm test -- --coverage'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('MySonarQubeServer') {
          sh 'sonar-scanner'
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t microservice-a:latest .'
      }
    }
  }
}