pipeline {
agent any

```
stages {

    stage('Checkout') {
        steps {
            echo 'Checking out code from GitHub'
        }
    }

    stage('Install Dependencies') {
        steps {
            sh 'npm install'
        }
    }

    stage('Test') {
        steps {
            sh 'npm test'
        }
    }

    stage('Build') {
        steps {
            sh 'npm run build'
        }
    }

    stage('Deploy') {
        steps {
            sh '''
                cp build/app.js /opt/jenkins-demo/build/app.js
                sudo /usr/local/bin/pm2 delete jenkins-demo || true
                sudo /usr/local/bin/pm2 start /opt/jenkins-demo/build/app.js --name jenkins-demo
                sudo /usr/local/bin/pm2 save
            '''
        }
    }
}

post {
    success {
        echo 'CI/CD PIPELINE SUCCESSFUL'
    }

    failure {
        echo 'CI/CD PIPELINE FAILED'
    }
}
```

}
