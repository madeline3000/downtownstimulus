# Generated by Django 3.0.6 on 2020-06-07 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20200603_1354'),
    ]

    operations = [
        migrations.RenameField(
            model_name='donation',
            old_name='amount',
            new_name='donation_amount',
        ),
        migrations.AddField(
            model_name='business',
            name='saturation',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='donation',
            name='donation_status',
            field=models.CharField(choices=[('Success', 'Success'), ('Failure', 'Failure'), ('Pending', 'Pending')], default='Pending', help_text='The status of donation transaction', max_length=128),
        ),
        migrations.AddField(
            model_name='donation',
            name='match',
            field=models.BooleanField(default=True, help_text='Whether or not this contribution should be matched.'),
        ),
        migrations.AddField(
            model_name='donation',
            name='round_number',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='oauth_uuid',
            field=models.CharField(blank=True, max_length=256),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='user',
            name='profile_pic',
            field=models.CharField(blank=True, max_length=1024),
        ),
    ]
