pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Running Build Step...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests...'
                // Simulate a test step (replace with real tests later)
                bat 'echo "Tests passed!"'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                bat 'echo "Staging deployment done."'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check logs for details.'
        }
    }
}
