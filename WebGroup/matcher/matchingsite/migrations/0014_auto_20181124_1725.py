# Generated by Django 2.1.3 on 2018-11-24 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matchingsite', '0013_auto_20181124_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='allow_location',
            field=models.BooleanField(default=True, null=True),
        ),
    ]
