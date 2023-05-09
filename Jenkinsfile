pipeline {
  agent {
    docker {
      image 'cypress/included:9.4.1'
    }
  }

  stages {
    stage('Build and Test') {

      steps {
        // sh 'npm ci'
        // sh "npm run test:ci:record"
        sh 'npm install'
        sh 'npx browserslist@latest --update-db'
        sh 'npx cypress run'
      }
    }
  }
}
