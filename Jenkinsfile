pipeline {
  agent {
    docker {
      image 'cypress/base'
    }
  }

  stages {
    stage('Build and Test') {

      steps {
        // sh 'npm ci'
        // sh "npm run test:ci:record"
        sh 'npm install'
        sh 'npx cypress run'
      }
    }
  }
  stage('Results') {
publishHTML([allowMissing: false,
         alwaysLinkToLastBuild: true,
         keepAll: true,
         reportDir: 
        '/var/lib/jenkins/workspace/Docs_LoadTest/target/jmeter/reports/*/',
         reportFiles: 'index.html',
         reportName: 'Docs Loadtest Dashboard'
         ])

 }
}
