pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'docker build -t nome-da-imagem-1 .'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker run -d -p 8000:8000 nome-da-imagem-1'
      }
    }
  }
}